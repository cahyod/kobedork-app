# Contributing to KOBEDORK

Thank you for your interest in contributing to KOBEDORK! We welcome contributions from the security research community and developers who want to help improve this tool for bug bounty hunters and security researchers.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Security Considerations](#security-considerations)
- [Questions?](#questions)

## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to understand the standards we expect contributors to follow.

## How Can I Contribute?

### Reporting Bugs

- Use the GitHub issue tracker to report bugs
- Check existing issues to avoid duplicates
- Provide detailed steps to reproduce the issue
- Include browser version, OS, and other relevant technical details
- Be respectful and constructive in your communication

### Suggesting Enhancements

- Open an issue with the enhancement tag
- Explain the enhancement and its use case
- Describe the current behavior vs. desired behavior
- Consider the impact on existing users
- Be specific about implementation details if possible

### Adding New Dork Categories/Templates

- Follow the existing format in `src/data/categories.json`
- Ensure new dorks are effective and relevant to security research
- Test new dorks before submitting
- Provide clear descriptions for new categories
- Add appropriate keywords and operators

### Code Contributions

- Fix bugs and improve existing functionality
- Add new features that align with project goals
- Improve documentation and examples
- Enhance UI/UX elements
- Optimize performance

## Development Setup

1. **Fork the repository** on GitHub

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/kobedork-app.git
   cd kobedork-app
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Make your changes** in the appropriate files

6. **Test your changes** by running the application locally

## Pull Request Process

1. **Create a feature branch** from the main branch
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Ensure your changes work** by testing the application

3. **Update documentation** if needed

4. **Commit your changes** with clear, descriptive messages
   ```bash
   git add .
   git commit -m "Add feature: description of your changes"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request** on the original repository
   - Describe your changes and why they're needed
   - Reference any relevant issues
   - Be responsive to feedback

## Style Guidelines

### JavaScript/React
- Use ES6+ features when appropriate
- Follow Airbnb JavaScript Style Guide conventions
- Use functional components with hooks
- Ensure proper error handling
- Write readable, well-commented code
- Use meaningful variable and function names

### CSS/Tailwind
- Follow the existing Tailwind CSS class conventions
- Maintain consistency with the existing UI
- Use responsive design where appropriate
- Ensure dark/light theme compatibility

### Documentation
- Use proper Markdown formatting
- Write clear, concise descriptions
- Follow existing documentation patterns
- Use proper spelling and grammar

## Security Considerations

When contributing to KOBEDORK, please be mindful of:

- Security implications of new features
- Potential for misuse of the tool
- Privacy considerations
- Legal compliance in different jurisdictions
- Ethical use of security research techniques

## Questions?

If you have questions about contributing, please:

- Check the existing documentation
- Open an issue with your question
- Contact the maintainers at cahyod@yahoo.co.id

---

Thank you for contributing to KOBEDORK! Your efforts help make security research more accessible and effective for the community.