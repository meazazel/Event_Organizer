# Berhan Bank CFMS Data Flow Diagrams

## Level 0 DFD (Context Diagram)

```mermaid
flowchart TD
    A[Customer] -->|Submit Loan Application| B[Berhan Bank CFMS]
    B -->|Provide Loan Status/Approval| A
    C[Bank Staff] -->|Process Application & Update Records| B
    B -->|Generate Reports| D[Management]
