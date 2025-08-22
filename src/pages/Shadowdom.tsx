import React, { useEffect, useRef } from "react";
import "./styles/Shadowdom.css";

const ShadowLogin: React.FC = () => {
  const shadowHost = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!shadowHost.current) return;
    if (shadowHost.current.shadowRoot) return;

    const outerShadowRoot = shadowHost.current.attachShadow({ mode: "open" });
    const outerContainer = document.createElement("div");

    outerContainer.innerHTML = `
      <style>
        .outer-container {
          border: 2px dashed var(--primary-500);
          padding: var(--spacing-4);
          border-radius: var(--border-radius-lg);
          background-color: var(--primary-50);
          margin: var(--spacing-4) 0;
        }
        
        .outer-title {
          color: var(--primary-800);
          font-size: var(--font-size-2xl);
          font-weight: var(--font-weight-bold);
          margin-bottom: var(--spacing-4);
          text-align: center;
        }
        
        #innerShadowHost {
          margin-top: var(--spacing-4);
        }
      </style>
      <div class="outer-container">
        <h2 class="outer-title">Our Company</h2>
        <div id="innerShadowHost"></div> <!-- Placeholder for second shadow root -->
      </div>
    `;

    outerShadowRoot.appendChild(outerContainer);

    const innerShadowHost = outerContainer.querySelector(
      "#innerShadowHost"
    ) as HTMLDivElement;
    const innerShadowRoot = innerShadowHost.attachShadow({ mode: "open" });

    const formContainer = document.createElement("div");
    formContainer.innerHTML = `
      <style>
        .login-form {
          font-family: var(--font-family);
          padding: var(--spacing-5);
          border: 1px solid var(--gray-300);
          border-radius: var(--border-radius-lg);
          width: 100%;
          max-width: 300px;
          box-shadow: var(--shadow-md);
          background: linear-gradient(to bottom, var(--white), var(--gray-50));
        }
        
        .form-title {
          color: var(--primary-800);
          font-size: var(--font-size-xl);
          font-weight: var(--font-weight-semibold);
          margin-bottom: var(--spacing-4);
          text-align: center;
        }
        
        .form-group {
          margin-bottom: var(--spacing-4);
        }
        
        label {
          display: block;
          margin-bottom: var(--spacing-2);
          font-weight: var(--font-weight-medium);
          color: var(--gray-700);
        }
        
        input {
          display: block;
          width: 100%;
          padding: var(--spacing-3);
          border: 1px solid var(--gray-300);
          border-radius: var(--border-radius-md);
          font-size: var(--font-size-base);
          transition: border-color var(--transition-fast);
          box-sizing: border-box;
        }
        
        input:focus {
          outline: none;
          border-color: var(--primary-500);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
        }
        
        button {
          background: var(--primary-600);
          color: var(--white);
          padding: var(--spacing-3);
          border: none;
          border-radius: var(--border-radius-md);
          cursor: pointer;
          width: 100%;
          font-size: var(--font-size-base);
          font-weight: var(--font-weight-medium);
          transition: background-color var(--transition-fast);
          margin-top: var(--spacing-2);
        }
        
        button:hover {
          background: var(--primary-700);
        }
        
        button:active {
          transform: translateY(1px);
        }
      </style>
      <form class="login-form">
        <h3 class="form-title">Login</h3>
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <button type="button" id="submit">Login</button>
      </form>
    `;

    innerShadowRoot.appendChild(formContainer);

    const button = innerShadowRoot.querySelector(
      "#submit"
    ) as HTMLButtonElement;
    button.addEventListener("click", () => {
      const username = (
        innerShadowRoot.querySelector("#username") as HTMLInputElement
      ).value;
      const password = (
        innerShadowRoot.querySelector("#password") as HTMLInputElement
      ).value;
      console.log("Login Attempt:", { username, password });
    });
  }, []);

  return (
    <div className="shadow-page">
      <div className="shadow-header">
        <h1 className="shadow-title">Shadow DOM Login</h1>
        <p className="shadow-description">
          This page demonstrates a login form implemented within a Shadow DOM.
        </p>
      </div>
      <div ref={shadowHost}></div>
    </div>
  );
};

export default ShadowLogin;
