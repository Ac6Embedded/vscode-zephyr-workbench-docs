---
sidebar_position: 1
---

# NTIA Checker

The **NTIA Checker** validates whether a generated Software Bill of Materials (SBOM) satisfies the minimum requirements defined by the National Telecommunications and Information Administration (NTIA).

It analyzes the generated SPDX data and reports missing or incomplete information.

![NTIA Checker](/img/zw/spdx/ntia-checker.png)

## Overview

The NTIA Checker verifies multiple SBOM elements, including:

- Component names
- Component versions
- Component identifiers
- Supplier information
- SBOM author information
- Creation timestamp
- Dependency relationships

The analysis result indicates whether the generated SBOM conforms to NTIA minimum requirements.

## Results

The output displays:

- Overall conformance status
- Validation result for each requirement
- Missing fields or incomplete information
- Pass or fail status for each element