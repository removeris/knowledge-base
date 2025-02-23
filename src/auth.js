import { reactive } from 'vue';

export const authState = reactive({
  isAuthenticated: !!localStorage.getItem('token'), // Initial check
});

// Update `authState` dynamically
export function login() {
  authState.isAuthenticated = true; // Update state
}

export function logout() {
  authState.isAuthenticated = false; // Update state
}
