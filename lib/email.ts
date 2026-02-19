// Email utility functions
// Note: Email sending is handled directly in the API route (app/api/submit-application/route.ts)
// This file is kept for potential future use or alternative email service integration

export const formatApplicationEmail = (formData: {
  founderName: string;
  background: string;
  problemStatement: string;
  targetMarket: string;
  ideaStage: string;
  budgetRange: string;
  timeline: string;
  equityOpenness: string;
}) => {
  return {
    to: 'hello@evolve8studio.in',
    subject: `New Application: ${formData.founderName}`,
    text: `
New Application Submission from Evolve8 Website

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FOUNDER INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${formData.founderName}
Background: ${formData.background}

PROBLEM & MARKET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Problem Statement: ${formData.problemStatement}
Target Market: ${formData.targetMarket}

PROJECT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Idea Stage: ${formData.ideaStage}
Budget Range: ${formData.budgetRange}
Timeline: ${formData.timeline}
Equity Openness: ${formData.equityOpenness}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted: ${new Date().toLocaleString()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim(),
  };
};

// Alternative: API route approach (more secure, recommended for production)
export const sendApplicationViaAPI = async (formData: {
  founderName: string;
  background: string;
  problemStatement: string;
  targetMarket: string;
  ideaStage: string;
  budgetRange: string;
  timeline: string;
  equityOpenness: string;
}) => {
  try {
    const response = await fetch('/api/submit-application', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit application');
    }

    return await response.json();
  } catch (error) {
    console.error('API submission error:', error);
    throw error;
  }
};

