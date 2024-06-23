function VirusGuard(sector_size, clean_rate, replication_rate) {
  let time = 0;
  let current_infection = sector_size;

  while (current_infection > 0) {
    // Calculate the time to clean the current infection size
    let time_to_clean = current_infection / clean_rate;

    // Calculate the infection size after this time
    let new_infection =
      current_infection * Math.pow(replication_rate, time_to_clean);

    // If the new infection size is less than or equal to the cleaned size, we are done
    if (new_infection <= clean_rate * time_to_clean) {
      time += time_to_clean;
      break;
    }

    // Otherwise, update the current infection size and time
    current_infection = new_infection - clean_rate * time_to_clean;
    time += time_to_clean;
  }

  return time;
}

// Example usage
console.log(VirusGuard(8 * 1024 * 1024, 5.12 * 1024 * 1000, 2.5));

// Example usage
console.log(VirusGuard(8 * 1024 * 1024, 5.12 * 1024 * 1000, 2.5));

console.log(VirusGuard(8 * 1024 * 1024, 5.12 * 1024 * 1000, 2.5)); // Should output approximately 3.625
