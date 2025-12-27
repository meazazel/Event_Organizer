# Berhan Bank CFMS Level 1 DFD

```mermaid
flowchart TD
    %% External Entities
    A[Customer] -->|Submit credit application & documents| B1[Credit File Registration]
    B1 -->|Acknowledgement, file ID| A

    C[Loan Officer] -->|Verify & update files| B2[Credit File Management]
    B2 -->|File status updates| C

    B1 --> B2
    B2 --> B3[Approval Workflow]
    B3 -->|Approval/Rejection| A
    B3 -->|Approval notifications| B2

    D[Manager] -->|Request reports| B4[Reporting Module]
    B4 -->|Financial, loan status, portfolio reports| D

    E[Cashier] -->|Send transaction summaries| B2
    B2 -->|Daily transaction logs| E

    F[Admin] -->|Update user roles & access| B5[Security & Audit]
    B5 -->|Audit logs, error reports| F
