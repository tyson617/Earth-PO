# Software Requirements

## Vision

The vision of this product is to streamline and enhance the internal procurement processes for our clothing company by providing a centralized and user-friendly platform. We aim to empower employees, from Inventory Managers to Executives, with a comprehensive tool that facilitates efficient tracking and management of purchase orders. This product envisions a cohesive system that brings clarity, accessibility, and control to the entire procurement lifecycle.

## Pain Point

This project addresses the pain point of manual and disjointed purchase order tracking within the company. Currently, employees may struggle with scattered information, leading to inefficiencies, delays, and potential errors in inventory management. The product aims to alleviate these challenges by consolidating all pertinent purchase order data in one accessible platform, enhancing collaboration and decision-making across different departments.

## Why Care

This product matters because it directly contributes to improving operational efficiency and decision-making within the company. By offering a user-friendly interface for tracking purchase orders, it reduces the likelihood of errors, ensures timely deliveries, and provides valuable insights for strategic decision-making. The enhanced transparency and accessibility afforded by this tool empower employees at all levels, promoting a more agile and responsive approach to procurement, ultimately benefiting the overall success and growth of the clothing company.

## Scope IN

- Purchase Order Tracking Table:
  - Display a comprehensive table summarizing purchase orders, including PO number, supplier name, effective ship date, effective delivery date, PO value, total PO quantity, number of SKUs, ship method, and state being shipped to.
  - Enable sorting and searching functionalities for ease of navigation.

- New Purchase Order Form:
  - Design a user-friendly form for adding new purchase orders with fields for PO number, supplier name, ship date, delivery date, PO value, quantity, SKUs, ship method, and destination state.
  - Implement validation and feedback mechanisms for successful submission.

- Executive Overview Dashboard:
  - Create a visually appealing dashboard providing high-level insights into key metrics, such as total PO value, quantity, and state-wise distribution.
  - Ensure the dashboard offers an intuitive and quick overview for executives to make informed decisions.

- Shipping Information Highlight:
  - Implement a visual highlight or alert system within the table to draw attention to urgent shipping details, such as ship date and state being shipped to.
  - Ensure shipping information is prominently displayed for easy identification by Shipping Coordinators.

- Financial Details Display:
  - Include the PO value in the tracking table to provide a quick overview of the financial aspect of each purchase order.
  - Implement a feature allowing the export of financial data for further analysis by the Accounting Department.

## Scope OUT

- Integration with External Systems:
  - The product will not include extensive integrations with external systems, such as ERP or financial software. It will focus on standalone functionality within the company's internal network.

- Automated Purchase Order Generation:
  - The product will not feature an automated purchase order generation system. Users will manually input new purchase orders through the dedicated form, promoting control and accuracy in the procurement process.

## Minimal Viable Product

The Minimum Viable Product (MVP) will focus on delivering essential features to meet the core needs of purchase order tracking and management. The MVP functionality includes:

### Purchase Order Tracking Table

- Display a table with key purchase order details (PO number, supplier name, ship date, etc.).
- Implement basic sorting and searching functionality for ease of use.

### New Purchase Order Form

Create a simple form for users to manually input new purchase order details.

### Executive Overview

Develop a basic dashboard providing high-level metrics for executives.

### Stretch Goals

While the MVP addresses fundamental requirements, the stretch goals aim to enhance the product's functionality and user experience. Stretch goals include:

### Advanced Sorting and Filtering

Extend the capabilities of sorting and filtering within the purchase order tracking table for more nuanced data exploration.

### Automated Alerts

Implement an automated alert system for urgent shipping details or critical updates.

### User Authentication and Access Control

Introduce user authentication and access control features to ensure data security and restrict access based on uer roles.

### Data Export and Reporting

Enhance the export functionality to allow users to generate detailed reports for analysis or documentation purposes, including pdf, excel, and csv.

### Mobile Responsiveness

Optimize the product for mobile responsiveness, allowing users to access key features on various devices.

## Functional Requirements

### Functionality

- User Authentication:
  - Users can log in with unique credentials.
  - Admins can create and delete user accounts.
- Profile Management:
  - Users can update their profile information, such as contact details.
- Purchase Order Tracking:
  - Display a table of purchase orders with details like PO number, supplier name, ship date, and more.
  - Enable basic sorting and searching functionality for the table.
- New Purchase Order Entry:
  - Users can use a form to manually input new purchase order details.
- Dashboard for Executive Overview:
  - Executives can view a dashboard summarizing key metrics of all purchase orders.
- Shipping Information Highlight:
  - Implement a visual highlight or alert system for urgent shipping details.
- Financial Details Display:
  - Include the PO value in the tracking table for financial insights.
- Allow the export of financial data for further analysis.

## Data Flow

- User Authentication:
  - Users log in with their credentials.
  - The server verifies user credentials and grants access.
- Profile Management:
  - Users update their profile information.
  - Changes are sent to the server and stored in the user database.
- Purchase Order Tracking:
  - Users access the tracking table.
  - The server retrieves relevant data from the database.
  - The data is sent to the user's device and displayed.
- New Purchase Order Entry:
  - Users access the new purchase order form.
  - Entered data is sent to the server.
  - The server stores the new purchase order details in the database.
- Dashboard for Executive Overview:
  - Executives access the dashboard.
  - The server compiles key metrics from the database.
  - The data is sent to the executive's device and displayed.
- Shipping Information Highlight:
  - The system continuously monitors purchase orders.
  - If urgent shipping details are detected, an alert is triggered.
  - The alert is sent to the user's device for notification.
- Financial Details Display:
  - The financial data is fetched from the database.
  - Users view financial details on the tracking table.
  - Users can export financial data for further analysis.

### Data Flow Summary

This data flow represents the typical user journey, ensuring that data is securely transmitted between the user's device and the server, providing a seamless and responsive experience for tracking and managing purchase orders.
