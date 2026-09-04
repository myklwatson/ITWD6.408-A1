/* ----------------------------------------
   DEMO 4: Authentication
   Signup / Login / Account Management via Supabase Auth
   ---------------------------------------- */

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://ttvvbnwepzedsqxqnhqe.supabase.co';
const supabaseKey = 'sb_publishable_c3TjLFAYPL0aDBmpfglIwg_5p-TcTA9';
const supabase = createClient(supabaseUrl, supabaseKey);

/* -------------------- UI TOGGLES (Login/Signup) -------------------- */

function showSignupForm() {
    document.getElementById("login-form").classList.add("d-none");
    document.getElementById("signup-form").classList.remove("d-none");
    document.getElementById("auth-title").textContent = "Sign Up";
    hideAuthError();
}

function showLoginForm() {
    document.getElementById("signup-form").classList.add("d-none");
    document.getElementById("login-form").classList.remove("d-none");
    document.getElementById("auth-title").textContent = "Log In";
    hideAuthError();
}

function showAuthError(message) {
    const errorEl = document.getElementById("auth-error");
    errorEl.textContent = message;
    errorEl.classList.remove("d-none");
}

function hideAuthError() {
    document.getElementById("auth-error").classList.add("d-none");
}

/* -------------------- SIGN UP -------------------- */

async function handleSignUp() {
    const firstName = document.getElementById("signup-first-name").value.trim();
    const lastName = document.getElementById("signup-last-name").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value;

    if (!firstName || !lastName || !email || !password) {
        showAuthError("Please fill in all fields.");
        return;
    }

    hideAuthError();

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: { first_name: firstName, last_name: lastName }
        }
    });

    if (error) {
        showAuthError(error.message);
    }
}

/* -------------------- LOG IN -------------------- */

async function handleLogIn() {
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;

    if (!email || !password) {
        showAuthError("Please enter your email and password.");
        return;
    }

    hideAuthError();

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        showAuthError(error.message);
    }
}

/* -------------------- LOAD PROFILE INTO ACCOUNT PAGE -------------------- */

async function loadProfile(userId, email) {
    document.getElementById("account-email").value = email;

    const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();

    if (error) {
        console.error("Failed to load profile:", error.message);
        return;
    }

    document.getElementById("account-first-name").value = data.first_name || "";
    document.getElementById("account-last-name").value = data.last_name || "";
    document.getElementById("account-address").value = data.address || "";
    document.getElementById("account-phone").value = data.phone || "";

    renderOrderHistory(data.order_history || []);
}

/* -------------------- SAVE PROFILE -------------------- */

async function saveProfile(userId) {
    const firstName = document.getElementById("account-first-name").value.trim();
    const lastName = document.getElementById("account-last-name").value.trim();
    const address = document.getElementById("account-address").value.trim();
    const phone = document.getElementById("account-phone").value.trim();

    const { error } = await supabase
        .from("profiles")
        .update({
            first_name: firstName,
            last_name: lastName,
            address: address,
            phone: phone,
            updated_at: new Date()
        })
        .eq("id", userId);

    const statusEl = document.getElementById("save-status");

    if (error) {
        statusEl.textContent = "Failed to save: " + error.message;
        statusEl.classList.remove("text-success", "d-none");
        statusEl.classList.add("text-danger");
    } else {
        statusEl.textContent = "Profile updated!";
        statusEl.classList.remove("text-danger", "d-none");
        statusEl.classList.add("text-success");
        setTimeout(() => statusEl.classList.add("d-none"), 2500);
    }
}

/* -------------------- ORDER HISTORY -------------------- */

function renderOrderHistory(orders) {
    const container = document.getElementById("order-history-list");

    if (orders.length === 0) {
        container.innerHTML = `<p class="text-muted small mb-0">No orders yet.</p>`;
        return;
    }

    container.innerHTML = orders.map(order => `
        <div class="d-flex justify-content-between border-bottom py-2">
            <span>${order.date} — ${order.items} item(s)</span>
            <span>$${order.total.toLocaleString()}</span>
        </div>
    `).join("");
}

/* -------------------- CHANGE PASSWORD -------------------- */

async function changePassword() {
    const newPassword = document.getElementById("new-password").value;
    const statusEl = document.getElementById("password-status");

    if (!newPassword || newPassword.length < 6) {
        statusEl.textContent = "Password must be at least 6 characters.";
        statusEl.classList.remove("d-none", "text-success");
        statusEl.classList.add("text-danger");
        return;
    }

    const { error } = await supabase.auth.updateUser({ password: newPassword });

    if (error) {
        statusEl.textContent = error.message;
        statusEl.classList.remove("d-none", "text-success");
        statusEl.classList.add("text-danger");
    } else {
        statusEl.textContent = "Password updated successfully!";
        statusEl.classList.remove("d-none", "text-danger");
        statusEl.classList.add("text-success");
        document.getElementById("new-password").value = "";
    }
}

/* -------------------- LOGOUT -------------------- */

async function handleLogout() {
    await supabase.auth.signOut();
    // onAuthStateChange will handle switching back to the login card
}

/* -------------------- DELETE ACCOUNT -------------------- */

async function handleDeleteAccount(userId) {
    const confirmed = confirm(
        "Are you sure you want to delete your account? This will remove your profile data and log you out. This cannot be undone."
    );
    if (!confirmed) return;

    const { error } = await supabase.from("profiles").delete().eq("id", userId);

    if (error) {
        alert("Failed to delete profile: " + error.message);
        return;
    }

    // Note: this deletes the profile row only, not the underlying auth.users record,
    // that requires a service-role key.
    await supabase.auth.signOut();
}

/* -------------------- AUTH STATE LISTENER -------------------- */

supabase.auth.onAuthStateChange(async (event, session) => {
    if (session) {
        document.getElementById("auth-card").classList.add("d-none");
        document.getElementById("account-page").classList.remove("d-none");

        // Check if a profile row already exists for this user
        const { data: existingProfile } = await supabase
            .from("profiles")
            .select("id")
            .eq("id", session.user.id)
            .single();

        // If not, create one now — using metadata stashed during signup, if present
        if (!existingProfile) {
            const meta = session.user.user_metadata || {};
            const { error: profileError } = await supabase.from("profiles").insert({
                id: session.user.id,
                first_name: meta.first_name || "",
                last_name: meta.last_name || ""
            });

            if (profileError) {
                console.error("Profile creation failed:", profileError.message);
            }
        }

        await loadProfile(session.user.id, session.user.email);
    } else {
        document.getElementById("auth-card").classList.remove("d-none");
        document.getElementById("account-page").classList.add("d-none");
    }
});

/* -------------------- INIT -------------------- */

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("show-signup").addEventListener("click", (e) => {
        e.preventDefault();
        showSignupForm();
    });

    document.getElementById("show-login").addEventListener("click", (e) => {
        e.preventDefault();
        showLoginForm();
    });

    document.getElementById("login-btn").addEventListener("click", handleLogIn);
    document.getElementById("signup-btn").addEventListener("click", handleSignUp);

    document.getElementById("logout-btn").addEventListener("click", handleLogout);

    document.getElementById("save-profile-btn").addEventListener("click", () => {
        supabase.auth.getUser().then(({ data }) => {
            if (data.user) saveProfile(data.user.id);
        });
    });

    document.getElementById("change-password-btn").addEventListener("click", changePassword);

    document.getElementById("delete-account-btn").addEventListener("click", () => {
        supabase.auth.getUser().then(({ data }) => {
            if (data.user) handleDeleteAccount(data.user.id);
        });
    });
});