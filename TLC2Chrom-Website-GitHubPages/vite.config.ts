- name: Build website
  working-directory: TLC2Chrom-Website-GitHubPages
  env:
    VITE_BASE_PATH: /tlc2Chrom_website/
  run: npm run build
