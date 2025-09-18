function indexOfIgnoreCase(s1: string, s2: string): number {
// Edge case: empty subStr should return 0 as per usual indexOf behavior
    if (subStr === "") return 0;

    // Convert both strings to lowercase for case-insensitive comparison
    const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();

    // Use built-in indexOf on the lowercase version
    return lowerStr.indexOf(lowerSubStr);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1 ?? "", s2 ?? ""));