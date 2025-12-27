# Berhan Bank CFMS Level 0 DFD

```mermaid
flowchart TD
    %% External Entities
    A[Customer] -->|Submit credit applications, documents| B[CFMS]
    B -->|Loan approval/rejection, account updates| A

    C[Loan Officer] -->|Process credit files| B
    B -->|Loan status updates, approval alerts| C

    D[Manager] -->|Request reports| B
    B -->|Financial, loan status, portfolio reports| D

    E[Cashier] -->|Send transaction summaries| B
    B -->|Daily transaction logs| E

    F[Admin] -->|Update user access| B
    B -->|Audit logs, error reports| F
