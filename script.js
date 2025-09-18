function indexOfIgnoreCase(s1: string, s2: string): number {
  if (!s1 || !s2) return -1; // handle null or empty inputs

  const v1 = s1.toLowerCase();
  const v2 = s2.toLowerCase();

  return v1.indexOf(v2);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1 ?? "", s2 ?? ""));