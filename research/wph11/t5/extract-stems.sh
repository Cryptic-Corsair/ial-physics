#!/bin/bash
# Extract verbatim QP question stems for the Topic 5 rebuild (t5).
# Each range is squeezed (whitespace collapsed) for readability.
cd /home/z/my-project/ial/research/wph11/txt
OUT=/home/z/my-project/ial/research/wph11/t5/qp-stems.txt
: > "$OUT"

grab () { # $1 label, $2 file, $3 start, $4 end
  echo "" >> "$OUT"
  echo "########## $1 ($2 lines $3-$4) ##########" >> "$OUT"
  awk -v s="$3" -v e="$4" 'NR>=s && NR<=e' "$2" | sed -e 's/[ \t]\+/ /g' -e 's/^ //' -e 's/ $//' -e '/^$/{ /^$/d }' | grep -v "DO NOT WRITE" | grep -vE "^[. ]{6,}$" | sed -E "s/[. ]{8,}.*$//; s/\*P[0-9]+A[0-9]+\*//g; s/^ +//" | grep -vE "^$" >> "$OUT"
}

grab "JAN20 Q2 (limit points order MCQ)" WPH11-2020-Jan-QP.txt 200 240
grab "JAN21 Q16 titanium" WPH11-2021-Jan-QP.txt 760 905
grab "JAN21 Q17 force meter" WPH11-2021-Jan-QP.txt 905 1060
grab "OCT20 Q19 strands" WPH11-2020-Oct-QP.txt 1140 1290
grab "JAN22 Q8 wire breaks MCQ" WPH11-2022-Jan-QP.txt 268 296
grab "JAN22 Q16 pinball" WPH11-2022-Jan-QP.txt 865 975
grab "JAN19 Q17 concrete drying" WPH11-2019-Jan-QP.txt 1195 1330
grab "OCT19 Q16 concrete" WPH11-2019-Oct-QP.txt 900 1110
grab "JUN19 Q16 copper CP3" WPH11-2019-Jun-QP.txt 843 1010
grab "JUN19 Q17 climber rope" WPH11-2019-Jun-QP.txt 1090 1250
grab "JAN25 Q17 tugboat rope" WPH11-2025-Jan-QP.txt 845 955
grab "JUN25 Q15 brick" WPH11-2025-Jun-QP.txt 595 670
grab "JUN25 Q17 guitar string" WPH11-2025-Jun-QP.txt 795 945
grab "JUN26 Q19 fishing line" WPH11-2026-Jun-QP.txt 1085 1185
grab "JUN26-01A Q15 toffee" WPH11-2026-Jun-01A-QP.txt 305 395
grab "OCT25 Q15 spring calibration" WPH11-2025-Oct-QP.txt 560 665
grab "OCT25 Q16 running blade" WPH11-2025-Oct-QP.txt 680 790
grab "JAN26 Q19 toaster" WPH11-2026-Jan-QP.txt 1230 1360
grab "JUN23 Q20 stunt harness" WPH11-2023-Jun-QP.txt 1180 1350
grab "JUN24 Q4-6 spring MCQs" WPH11-2024-Jun-QP.txt 138 195
grab "JUN23 Q3+Q4 MCQs" WPH11-2023-Jun-QP.txt 105 150
grab "JUN23 Q10 series MCQ" WPH11-2023-Jun-QP.txt 255 285
grab "JUN22 Q4+Q7 MCQs" WPH11-2022-Jun-QP.txt 120 232
grab "JUN22 Q10 compression MCQ" WPH11-2022-Jun-QP.txt 285 300
grab "OCT22 Q6 rubber band areas MCQ" WPH11-2022-Oct-QP.txt 188 218
grab "OCT22 Q8 parallel energy MCQ" WPH11-2022-Oct-QP.txt 272 292
grab "OCT21 Q3 strain energy MCQ" WPH11-2021-Oct-QP.txt 108 136
grab "JUN21 Q5+Q9 MCQs" WPH11-2021-Jun-QP.txt 133 148
grab "JUN21 Q9 copper rod MCQ" WPH11-2021-Jun-QP.txt 255 290
grab "JAN26 Q8-10 MCQs" WPH11-2026-Jan-QP.txt 232 330
grab "JUN26 Q1+Q12 MCQ" WPH11-2026-Jun-QP.txt 60 130
grab "JUN26 Q12 spring calc" WPH11-2026-Jun-QP.txt 385 420
grab "JAN26 Q9 strain energy MCQ (dup guard)" WPH11-2026-Jan-QP.txt 262 308
wc -l "$OUT"
