import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  define: {
    "process.env.REACT_APP_CLIENT_ID": JSON.stringify(
      process.env.REACT_APP_CLIENT_ID
    ),
  },
};
