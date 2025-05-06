/* ==================== */
/* Global Reset & Basics */
/* ==================== */
* {
  
    
    font-family: 'Poppins', sans-serif; /* Modern font */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* ==================== */
/* Navigation Bar */
/* ==================== */


.logo {
    font-size: 24px;
    color: #ffbb33;
}

.actions {
    display: flex;
    gap: 10px;
    margin-left: auto; /* Push buttons to the right */
}

/* ==================== */
/* Buttons */
/* ==================== */



/* ==================== */
/* Sidebar */
/* ==================== */


/* ==================== */
/* Menu Items */
/* ==================== */
.menu-item {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 15px;
    background-color: rgb(23,23,23));
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    position: relative;
    
}

.menu-item h1{
    font-size: 15px;
    font-weight: normal;
    font-style: italic;
    background-color: transparent;
}

/* Icons */
.menu-item img{
    width: 30px;
    height: 30px;
    background-color: transparent;
}

/* Hover Effects */
.menu-item:hover {
    background: linear-gradient(90deg, rgba(229, 161, 52, 0.5) 0%, rgba(255, 224, 68, 0.745) 100%);
    transform: translateX(10px);
    box-shadow: 0 0 10px rgba(144, 117, 11, 0.5);
}

/* ==================== */
/* Main Content */
/* ==================== */
.container {
    display: flex;
    height: 100%;
    margin-top: 40px;
   
    
}
.wsh{
    margin-bottom: 200px;
}

/* Editor */
.editor {
    flex: 1;
    padding: 20px;
    background: #333;
    margin-top: -15px; /* Adjust the value as needed */
}

textarea {
    width: 100%;
    height: 85%;
    background: rgb(23,23,23);
    color: white;
    border: none;
    padding: 10px;
    font-size: 16px;
    font-family: 'Courier New', monospace;
}

/* Result */
.result {
    flex: 1;
    padding: 20px;
    background: #333;
    color: white;
    font-family: 'Courier New', monospace;
}

iframe {
    width: 100%;
    height: 85%;
    border: none;
}

/* ==================== */
/* Links */
/* ==================== */
a {
    text-decoration: none;
    color: #007BFF;
    font-weight: bold;
    transition: color 0.3s ease, transform 0.2s ease;
}

a:hover {
    color: #0056b3;
    text-decoration: underline;
    transform: scale(1.05);
}





/* ==================== */
/* Buttons Container */
/* ==================== */
.buttons-container {
    display: flex;
    justify-content: space-around; /* Distribute buttons evenly */
    padding: 10px;
    background-color: #222; /* Background color (modifiable) */
    border-top: 2px solid #444; /* Separator line with the result */
}

.action-btn {
    background-color: #eeeeee; /* Yellow color */
    color: black;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
}

.action-btn:hover {
    background-color: #ffdd55;
    transform: scale(1.1);
}

/* ==================== */
/* Dark Mode (Default) */
/* ==================== */
body.dark-mode {
    background-color: #121212;
    color: #ffffff;
}

.dark-mode .navbar {
    background-color: #1f1f1f;
}

.dark-mode .sidebar {
    background-color: #1f1f1f;
    color: #ffffff;
}

.dark-mode .editor textarea {
    background-color: #2d2d2d;
    color: #ffffff;
    border: 1px solid #444;
}

.dark-mode .result {
    background-color: #1f1f1f;
    color: #ffffff;
}



.logo {
    font-size: 24px;
    color: #ffbb33;
}

.actions {
    display: flex;
    gap: 10px;
    margin-left: auto; /* Push actions to the right */
}

/* Run Button */

/* Dark/Light Mode Toggle Button */
.mode-toggle-btn {
    background-color: #ffbb33; /* Vibrant blue */
    color: #ffffff; /* White text */
    border: none;
    padding: 8px 16px;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px; /* Space between icon and text */
    transition: 0.3s;
}

.mode-toggle-btn:hover {
    background-color:#ffbb33; /* Slightly darker blue on hover */
}

.mode-toggle-btn i {
    font-size: 16px; /* Icon size */
}
/* File Upload Section */
.file-upload {
    margin-bottom: 20px;
    display: flex;
    gap: 10px;
    align-items: center;
}

#file-input {
    padding: 10px;
    border: 2px dashed #ffbb33; /* Dashed border for a modern look */
    border-radius: 8px;
    background-color: rgba(74, 144, 226, 0.1); /* Light blue background */
    color: #333;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
}

#file-input:hover {
    background-color: rgba(230, 209, 46, 0.2); /* Slightly darker on hover */
    border-color:#ffbb33; /* Darker border on hover */
}

.file-upload button {
    background-color:#ffbb33; /* Vibrant blue */
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
}

.file-upload button:hover {
    background-color: #ffbb33; /* Darker blue on hover */
    transform: translateY(-2px); /* Lift effect */
    box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3); /* Subtle shadow */
}
/* File Display Section */
#file-display {
    margin-top: 20px;
    padding: 20px;
    border: 2px solid #e0e0e0; /* Light border */
    border-radius: 8px;
    background-color: #a49d9d; /* Light background */
    color: #333;
    max-height: 200px;
    overflow-y: auto;
    transition: all 0.3s ease;
}

#file-display img {
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Subtle shadow for images */
}

#file-display pre {
    white-space: pre-wrap; /* Wrap text for better readability */
    font-family: 'Courier New', monospace;
    font-size: 14px;
    line-height: 1.5;
    background-color: #878383;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #e0e0e0;
}
/* Result Section */
.result {
    background-color: #fff; /* White background */
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    transition: all 0.3s ease;
}

.result h3 {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
}


.result iframe {
    width: 100%;
    height: 300px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background-color: #a8a8a8;
    margin-top: 20px;
}

.buttons-container {
    margin-top: 20px;
    display: flex;
    gap: 10px;
    justify-content: flex-start;
}

.buttons-container .action-btn {
    background-color:#ffbb33; /* Vibrant blue */
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
}

.buttons-container .action-btn:hover {
    background-color: #ffbb33; /* Darker blue on hover */
    transform: translateY(-2px); /* Lift effect */
    box-shadow: 0 4px 12px rgba(202, 202, 40, 0.3); /* Subtle shadow */
}
/* Dark Mode Styles */
body.dark-mode .result {
    background-color: #1f1f1f; /* Dark background */
    color: #fff;
}

body.dark-mode #file-display {
    background-color: #2d2d2d; /* Darker background */
    border-color: #444;
    color: #fff;
}

body.dark-mode #file-display pre {
    background-color: #333;
    border-color: #444;
    color: #fff;
}

body.dark-mode .file-upload #file-input {
    background-color: rgba(74, 144, 226, 0.1);
    border-color:#ffbb33;
    color: #fff;
}

body.dark-mode .file-upload #file-input:hover {
    background-color: rgba(191, 169, 42, 0.2);
    border-color: #96a738;
}

body.dark-mode .buttons-container .action-btn {
    background-color: #ffbb33;
    color: #fff;
}

body.dark-mode .buttons-container .action-btn:hover {
    background-color: #ffbb33
}
.editor {
    margin: 25; /* Supprime les marges externes */
    padding: 20; /* Supprime les marges internes */
}


#code {
    margin: 20; /* Évite les marges inutiles */
    padding: 15px; /* Petit espace interne pour le texte */
    width: 455px;
    max-width:600px ;
    height: 450px; /* Hauteur fixe */
    max-height: 500px; /* Empêcher l'agrandissement */
    font-size: 16px;
    color: white;
    background-color: #222;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #555;
    white-space: pre-wrap;
    font-family: "Courier New", monospace;
    overflow: auto; /* Active le scroll horizontal et vertical si nécessaire */
    overflow-y: auto; /* Défilement vertical */
    resize: both;
    display: block; /* Empêche la déformation du div */
}
.icon-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 24px; /* Adjust icon size */
    color: white; /* Adjust color */
    padding: 10px;
    transition: color 0.3s ease;
}

.icon-btn:hover {
    color: #ffbb33; /* Change color on hover */
}

/* Light Mode */
body.light-mode {
    background-color: #ffffff;
    color: #222;
}

/* Navigation Bar */
body.light-mode .navbar {
    background-color: #f8f9fa;
   
}

/* Sidebar */
body.light-mode .sidebar {
    background-color: #e9ecef;
    color: #333;
}

/* Editor and Result Section */

body.light-mode .result {
    background-color: #f8f9fa;
    color: #333;
}

/* Buttons */
body.light-mode .mode-toggle-btn,
body.light-mode .run-btn,
body.light-mode .action-btn {
    background-color: #ffbb33;
    color: black;
}

body.light-mode .mode-toggle-btn:hover,
body.light-mode .run-btn:hover,
body.light-mode .action-btn:hover {
    background-color: #ffdd55;
}


body.light-mode .menu-item:hover {
    background: linear-gradient(90deg, rgba(255, 200, 50, 0.5) 0%, rgba(255, 224, 68, 0.8) 100%);
    box-shadow: 0 0 10px rgba(255, 200, 50, 0.5);
}

/* Icons */
body.light-mode i {
    color: #ffbb33;
}
/* Light Mode */
body.light-mode {
    background-color: #ffffff;
    color: #222;
}

/* Navigation Bar */
body.light-mode .navbar {
    background-color: #f8f9fa;
    color: #222;
}

/* Sidebar */
body.light-mode .sidebar {
    background-color: #e9ecef;
    color: #333;
}

/* Editor and Result Section */
body.light-mode .editor,
body.light-mode .result {
    background-color: #f8f9fa;
    color: #333;
}

/* Buttons */
body.light-mode .mode-toggle-btn,
body.light-mode .run-btn,
body.light-mode .action-btn {
    background-color: #ffbb33;
    color: #808080; /* Gray (Gris) */
}

body.light-mode .mode-toggle-btn:hover,
body.light-mode .run-btn:hover,
body.light-mode .action-btn:hover {
    background-color: #ffdd55;
}

/* Menu Items */
body.light-mode .menu-item {
    background-color: #f8f9fa;
    color: #222;
}

body.light-mode .menu-item:hover {
    background: linear-gradient(90deg, rgba(255, 200, 50, 0.5) 0%, rgba(255, 224, 68, 0.8) 100%);
    box-shadow: 0 0 10px rgba(255, 200, 50, 0.5);
}

/* Icons */
body.light-mode i {
    color: #808080; /* Gray (Gris) */
}
body.light-mode .result h3 {
    background-color: #ffffff; /* Gray (Gris) */
}
body.light-mode .file-upload {
    background-color: #faf7f7; /* Gray (Gris) */
}
body.light-mode .buttons-container {
    background-color: #ffffff; /* Gray (Gris) */
}
body.light-mode .buttons-container h3 {
color: #ffffff; 
background-color: #ffbb33;
font-size: 14px;

font-style: italic;
}
body.dark-mode .buttons-container h3 {
    color: #ffffff; 
    background-color: #ffbb33;
    font-size: 14px;
    
    font-style: italic;
    }
    
       body.light-mode   .Menu{
   
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px;
            background-color: rgb(255, 255, 255);
            border-radius: 8px;
            transition: all 0.3s ease-in-out;
            cursor: pointer;
            position: relative;
        }
        body.light-mode .menu h1 {
            font-size: 18px; /* Slightly larger for readability */
            font-weight: 600; /* Semi-bold for a balanced look */
            font-style: italic;
            color: #444; /* Dark gray for better contrast */
            background-color: #f8f9fa;; /* Light gray for a subtle background */
            padding: 10px 15px; /* Adds spacing for a cleaner look */
            border-radius: 5px; /* Soft rounded edges for a modern feel */
            text-align: center; /* Centered heading for a structured layout */
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); /* Light shadow for depth */
        }
         
      
        body.light-mode .Menu:hover {
            background: linear-gradient(90deg, rgba(169, 168, 166, 0.5) 0%, rgba(96, 94, 84, 0.8) 100%);
            box-shadow: 0 0 10px rgba(102, 101, 99, 0.5);
        }
        body.light-mode .editor
      {
            background-color:  #fdfefe !important;
            color: #000000 !important;
            border-radius: 5px;
        }
        body.light-mode{
            background-color: #fff;
        }
        body.light-mode .icon-btn {
            background-color: white; /* Full white background */
            border: none;
            cursor: pointer;
            font-size: 24px; /* Adjust icon size */
            color: black; /* Icon color in light mode */
            padding: 10px;
            transition: background-color 0.3s ease, color 0.3s ease;
            border-radius: 50%; /* Make it circular */
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Soft shadow */
        }
        
        /* Hover effect */
        body.light-mode .icon-btn:hover {
            background-color: #f0f0f0;
        }
        
        /* Dark mode stays the same */
        body.dark-mode .icon-btn {
            background-color: black;
            color: white;
        }



/* Wrapper for icons */


/* FontAwesome Icon Styling */
.info i {
    font-size: 30px;
    color: white;
    transition: transform 0.2s, color 0.3s;
}

/* Hover effect for icons */
.info:hover i {
    color: #ffcc00;  /* Highlight color */
    transform: scale(1.1);
}

/* Responsive Design */
@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        padding: 15px;
    }
    .jsp {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    .info {
        padding: 6px;
    }
}
body.light-mode .jsp{
    background-color: #fff;
}












/* Dark Mode */
body.dark-mode {
    background-color:rgb(23, 23, 23);
    color: white;
}

/* Ensure only one logo is visible */
.logo-light {
    display: block;  /* Show in light mode */
}
.logo-dark {
    display: none;   /* Hide in light mode */
}

/* When dark mode is active, switch logos */
body.dark-mode .logo-light {
    display: none;   /* Hide light mode logo */
}
body.dark-mode .logo-dark {
    display: block;  /* Show dark mode logo */
}
#theme-toggle i {
    color: black; /* Change to white in dark mode */
    transition: color 0.3s;
}

body.dark-mode #theme-toggle i {
    color: white; /* Ensure good contrast */
}
#theme-toggle {
    background-color: #FFC107; /* Yellow in light mode */
    color: black;
    border: none;
    padding: 8px 16px;
    border-radius: 20px;
}

body.dark-mode #theme-toggle {
    background-color: #262525; /* Darker color in dark mode */
    color: white;
}

/* Header Styling */
header {
    background-color: rgb(23, 23, 23); /* Dark background for the header */
    padding: 10px;
    display: flex;
    justify-content: space-between; /* Space between left and right sections */
    align-items: center; /* Vertically center items */
    flex-wrap: nowrap; /* Prevent wrapping to the next line */
}

/* Left Side: Icons */


/* Right Side: Buttons */
.navbar-right {
    display: flex;
    align-items: center;
    gap: 10px; /* Space between buttons */
    flex-shrink: 0; /* Prevent shrinking */
}

/* Icon Styling */
.navbar-left i {
    font-size: 24px; /* Adjust icon size */
    color: inherit; /* Inherit color from parent */
    transition: color 0.3s ease; /* Smooth color transition */
}

/* Dark Mode Icon Color */
.dark-mode .navbar-left i {
    color: #ffffff; /* White color for dark mode */
}



/* Hover Effect (optional) */
.navbar-left i:hover {
    color: #ffbb33; /* Green color on hover */
}

/* Run Button Styling */

/* Dark/Light Mode Toggle Button Styling */


.mode-toggle-btn:hover {
    background-color: #444; /* Slightly lighter on hover */
}


/* Simple Icon Button */


/* Hover Effect */
.simple-icon-btn:hover {
    background: #0056b3; /* Darker blue on hover */
}

/* Icon Styling */
.simple-icon-btn i {
    font-size: 18px; /* Icon size */
}
.navbar-left{
    background-color:#333 ;
}







.menu-item {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 15px 20px; /* Slightly more horizontal padding */
    background-color: rgb(23, 23, 23);
    border-radius: 12px; /* Slightly larger border radius */
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.1); /* Subtle border for depth */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Soft shadow for elevation */
}

.menu-item h1 {
    font-size: 16px; /* Slightly larger font size */
    font-weight: 500; /* Medium font weight for better readability */
    font-style: normal; /* Remove italic for a cleaner look */
    color: rgba(255, 255, 255, 0.9); /* Light text color */
    background-color: transparent;
    margin: 0; /* Remove default margin */
    letter-spacing: 0.5px; /* Slight letter spacing for elegance */
}

/* Icons */
.menu-item img {
    width: 30px;
    height: 30px;
    background-color: transparent;
    filter: brightness(0.9); /* Slightly dim the icon for subtlety */
}

/* Hover Effects */
.menu-item:hover {
    background: linear-gradient(90deg, rgba(229, 161, 52, 0.6) 0%, rgba(255, 224, 68, 0.8) 100%);
    transform: translateX(10px);
    box-shadow: 0 6px 12px rgba(229, 161, 52, 0.3); /* More pronounced shadow on hover */
    border-color: rgba(229, 161, 52, 0.5); /* Highlight border on hover */
}

/* Optional: Add a smooth transition for the text color on hover */
.menu-item:hover h1 {
    color: rgba(0, 0, 0, 0.9); /* Darker text on hover for contrast */
}

/* Optional: Add a subtle animation for the icon on hover */
.menu-item:hover img {
    transform: scale(1.1); /* Slightly enlarge the icon */
    transition: transform 0.3s ease-in-out;
}
.navbar-left {
    background-color: rgb(23,23,23);
    display: flex;
    align-items: center;
    gap: 50px; /* Space between icons */
    flex-shrink: 0; /* Prevent shrinking */
    margin-left: 0; /* Remove left margin */
    /* Or use a negative margin to pull it further left */
    margin-left: 1000px; /* Adjust as needed */
}

.btn-run {
    background-color: #444;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    gap: 8px; /* Spacing between icon and text */
}

.btn-run i {
    font-size: 18px; /* Adjust icon size */
}

.btn-run:hover {
    background-color: #ffbb33;
    transform: scale(1.05);
}

.btn-run:active {
    transform: scale(0.95);
}
.navbar{
    padding: 1px;
}
 .logo {
    margin-left: -10px;
    border-radius: 50%;
    
    margin-top: 30px;
}
header {
    height: 50px; /* Adjust height */
}
