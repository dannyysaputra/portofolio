# 03_CASE_STUDY_SYSTEM.md

## Tujuan case study
Case study harus terasa seperti dokumentasi engineering yang rapi, bukan gallery project biasa.

## Urutan section case study
1. Hero Summary
2. Quick Facts
3. Problem
4. Why It Mattered
5. Context and Constraints
6. My Role
7. Users / Stakeholders
8. Solution Overview
9. Architecture / Implementation
10. Technical Decisions
11. Trade-offs
12. Outcome / Impact
13. Screens / Diagrams / Proof
14. Lessons Learned
15. Future Improvements
16. Links / CTA

## Struktur konten tiap project

### 1. Project Summary
Ringkas dalam 3 sampai 5 baris:
- apa sistemnya
- siapa user-nya
- teknologi utama
- hasil akhirnya

### 2. Problem
Jelaskan masalah nyata dengan spesifik.

Format yang baik:
> [user] mengalami [masalah], yang menyebabkan [biaya, delay, friksi, atau inefisiensi].

### 3. Why It Mattered
Jelaskan kenapa masalah ini penting untuk diselesaikan.

### 4. Context and Constraints
Masukkan batasan seperti:
- data quality
- waktu
- deployment limits
- integration limits
- accuracy trade-offs

### 5. My Role
Tulis dengan jelas:
- apa yang dikerjakan sendiri
- apa yang dikerjakan tim
- apa yang dimiliki penuh

### 6. Users / Stakeholders
Buat project terasa nyata dengan user dan stakeholder yang jelas.

### 7. Solution Overview
Ringkas sistem end-to-end dalam bahasa yang mudah dipahami.

### 8. Architecture / Implementation
Harus memperlihatkan cara berpikir sistem, misalnya:
- service boundaries
- request flow
- storage layer
- processing pipeline
- deployment flow

### 9. Technical Decisions
Masukkan 2 sampai 4 keputusan penting.
Contoh:
- kenapa FastAPI
- kenapa RAG pipeline
- kenapa structured storage tertentu
- kenapa background processing

### 10. Trade-offs
Tunjukkan kedewasaan engineering.
Contoh:
- memilih speed over completeness
- memilih simpler deployment over higher flexibility
- memilih deterministic workflow over experimental model behavior

### 11. Outcome / Impact
Tampilkan bukti konkret.
Boleh berupa:
- akurasi
- reduction
- throughput
- deployment result
- integration success
- workflow improvement

### 12. Screens / Diagrams / Proof
Gunakan:
- screenshot utama
- architecture diagram
- flow diagram
- admin/dashboard visual jika relevan
- metric summary card

### 13. Lessons Learned
Satu atau dua insight kuat lebih baik daripada paragraf panjang.

### 14. Future Improvements
Harus spesifik dan masuk akal.
Contoh:
- background queue
- observability
- evaluation pipeline
- user feedback loop
- admin analytics

## Template ringkas yang bisa dipakai ulang

```md
# [Project Name]

## Summary
...

## Problem
...

## Why It Mattered
...

## Constraints
...

## My Role
...

## Users / Stakeholders
...

## Solution
...

## Architecture / Implementation
...

## Technical Decisions
- ...
- ...

## Trade-offs
- ...
- ...

## Impact / Outcomes
- ...
- ...

## Lessons Learned
...

## Future Improvements
...
```
