export const getSearchData = () => {
  return [
    {
      id: "01",
      title: "Loan Dispute",
      content: "Customer complaint about incorrect loan interest rate.",
      category: "Loan",
      decision: "Upheld",
      company: "Barclays Bank Plc",
      date: "2022-11-08",
    },
    {
      id: "02",
      title: "Credit Card Fraud",
      content: "Unauthorized transaction on credit card.",
      category: "Credit Card",
      decision: "Rejected",
      company: "HSBC Holdings",
      date: "2023-02-15",
    },
    {
      id: "03",
      title: "Account Closure Issue",
      content: "Customer dissatisfied with account closure process.",
      category: "Current Account",
      decision: "Partially Upheld",
      company: "Lloyds Bank",
      date: "2023-01-05",
    },
    {
      id: "04",
      title: "Insurance Claim",
      content: "Insurance claim dispute regarding coverage.",
      category: "Insurance",
      decision: "Upheld",
      company: "Aviva Plc",
      date: "2023-03-22",
    },
    {
      id: "05",
      title: "Mortgage Payment Issue",
      content: "Incorrect mortgage payment details provided.",
      category: "Mortgage",
      decision: "Rejected",
      company: "Santander UK",
      date: "2023-04-10",
    },
    {
      id: "06",
      title: "Savings Account Interest",
      content: "Interest not applied correctly to savings account.",
      category: "Savings Account",
      decision: "Upheld",
      company: "Nationwide Building Society",
      date: "2022-12-17",
    },
    {
      id: "07",
      title: "PPI Complaint",
      content: "Mis-sold payment protection insurance.",
      category: "PPI",
      decision: "Upheld",
      company: "NatWest Bank",
      date: "2023-01-28",
    },
    {
      id: "08",
      title: "Loan Overpayment",
      content: "Overpayment on loan not refunded.",
      category: "Loan",
      decision: "Rejected",
      company: "Barclays Bank Plc",
      date: "2023-03-01",
    },
    {
      id: "09",
      title: "Bank Fees Dispute",
      content: "Dispute regarding excessive overdraft fees.",
      category: "Overdraft",
      decision: "Upheld",
      company: "Metro Bank",
      date: "2023-05-06",
    },
    {
      id: "10",
      title: "Unauthorised Account Activity",
      content: "Customer noticed unauthorised withdrawals.",
      category: "Current Account",
      decision: "Rejected",
      company: "HSBC Holdings",
      date: "2023-02-20",
    },
    {
      id: "11",
      title: "Missed Direct Debit",
      content: "Bank missed scheduled direct debit payment.",
      category: "Direct Debit",
      decision: "Upheld",
      company: "TSB Bank",
      date: "2023-04-15",
    },
    {
      id: "12",
      title: "Delay in Fund Transfer",
      content: "Delay in transferring funds between accounts.",
      category: "Funds Transfer",
      decision: "Partially Upheld",
      company: "Barclays Bank Plc",
      date: "2023-03-25",
    },
    {
      id: "13",
      title: "Incorrect Credit Report",
      content: "Bank reported incorrect details on credit report.",
      category: "Credit Report",
      decision: "Upheld",
      company: "Experian Plc",
      date: "2023-05-12",
    },
    {
      id: "14",
      title: "Fraudulent Loan Application",
      content: "Fraudulent loan taken out in customer's name.",
      category: "Loan",
      decision: "Rejected",
      company: "Lloyds Bank",
      date: "2023-01-18",
    },
    {
      id: "15",
      title: "Lost Cheque Issue",
      content: "Cheque lost during bank processing.",
      category: "Cheque",
      decision: "Upheld",
      company: "Halifax",
      date: "2022-12-30",
    },
    {
      id: "16",
      title: "Card Decline Error",
      content: "Debit card declined during a transaction.",
      category: "Debit Card",
      decision: "Rejected",
      company: "HSBC Holdings",
      date: "2023-04-22",
    },
    {
      id: "17",
      title: "Foreign Transaction Charges",
      content: "Customer disputes unexpected foreign transaction charges.",
      category: "Credit Card",
      decision: "Partially Upheld",
      company: "Santander UK",
      date: "2023-02-08",
    },
    {
      id: "18",
      title: "Standing Order Cancellation",
      content: "Standing order cancelled without customer consent.",
      category: "Standing Order",
      decision: "Upheld",
      company: "NatWest Bank",
      date: "2023-03-14",
    },
    {
      id: "19",
      title: "Mortgage Interest Rate Dispute",
      content: "Incorrect interest rate applied to mortgage.",
      category: "Mortgage",
      decision: "Rejected",
      company: "Barclays Bank Plc",
      date: "2023-01-11",
    },
    {
      id: "20",
      title: "ATM Withdrawal Error",
      content: "ATM did not dispense cash but account debited.",
      category: "ATM",
      decision: "Upheld",
      company: "Nationwide Building Society",
      date: "2023-05-19",
    },
  ];
};

export const filterData = ({ data, query, filters }) => {
  const { category, decision, company, date } = filters;
  const normalizedQuery = query.toLowerCase();

  return data.filter(item => {
    const matchesQuery = !query || item.title.toLowerCase().includes(normalizedQuery);
    const matchesCategory = !category || item.category === category.value;
    const matchesDecision = !decision || item.decision === decision.value;
    const matchesCompany = !company || item.company === company.value;
    const matchesDate = !date || item.date.startsWith(date.value);

    return matchesQuery && matchesCategory && matchesDecision && matchesCompany && matchesDate;
  });
};
