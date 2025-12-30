flowchart TD
``` mermaid
    A([Start]) --> B[Login to System]
    B --> C{Valid Credentials?}

    C -- No --> D[Show Error Message]
    D --> B

    C -- Yes --> E[Display Dashboard]

    E --> F[Create Credit File]
    F --> G[Enter Customer & Loan Details]
    G --> H[Upload Credit Documents]

    H --> I[Submit Credit File]
    I --> J[System Validates Data]

    J --> K{Data Complete?}

    K -- No --> L[Request Missing Information]
    L --> G

    K -- Yes --> M[Forward to Manager]

    M --> N{Manager Decision}

    N -- Reject --> O[Reject Credit File]
    O --> P[Notify Credit Officer]
    P --> Q([End])

    N -- Approve --> R[Approve Credit File]
    R --> S[Store File in Repository]
    S --> T[Update Status & Logs]
    T --> Q([End])
