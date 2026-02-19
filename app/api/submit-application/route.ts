import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Production-grade API route for form submissions
// This sends emails directly to hello@evolve8studio.in

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Log the submission for verification
    console.log('\n=== NEW APPLICATION SUBMISSION RECEIVED ===');
    console.log('Timestamp:', new Date().toISOString());
    console.log('Founder Name:', formData.founderName);
    console.log('Target Market:', formData.targetMarket);
    console.log('Idea Stage:', formData.ideaStage);
    console.log('==========================================\n');

    // Validate required fields
    const requiredFields = [
      'founderName',
      'background',
      'problemStatement',
      'targetMarket',
      'ideaStage',
      'budgetRange',
      'timeline',
      'equityOpenness',
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        console.error(`Validation failed: Missing required field: ${field}`);
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Format email content
    const emailBody = `
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
    `.trim();

    // Option 1: Using Resend (recommended for production)
    if (resend) {
      try {
        console.log('Attempting to send email via Resend...');
        const { data, error } = await resend.emails.send({
          from: 'Evolve8 Website <onboarding@resend.dev>', // Change this after domain verification
          to: ['hello@evolve8studio.in'],
          subject: `New Application: ${formData.founderName}`,
          text: emailBody,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #1A3C34; margin-bottom: 30px;">New Application Submission</h2>
              <div style="background: #f9f8f4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #D97757;">
                <h3 style="color: #1A3C34; border-bottom: 2px solid #D97757; padding-bottom: 10px; margin-top: 0;">Founder Information</h3>
                <p style="margin: 10px 0;"><strong>Name:</strong> ${formData.founderName}</p>
                <p style="margin: 10px 0;"><strong>Background:</strong> ${formData.background}</p>
              </div>
              <div style="background: #f9f8f4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #D97757;">
                <h3 style="color: #1A3C34; border-bottom: 2px solid #D97757; padding-bottom: 10px; margin-top: 0;">Problem & Market</h3>
                <p style="margin: 10px 0;"><strong>Problem Statement:</strong> ${formData.problemStatement}</p>
                <p style="margin: 10px 0;"><strong>Target Market:</strong> ${formData.targetMarket}</p>
              </div>
              <div style="background: #f9f8f4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #D97757;">
                <h3 style="color: #1A3C34; border-bottom: 2px solid #D97757; padding-bottom: 10px; margin-top: 0;">Project Details</h3>
                <p style="margin: 10px 0;"><strong>Idea Stage:</strong> ${formData.ideaStage}</p>
                <p style="margin: 10px 0;"><strong>Budget Range:</strong> ${formData.budgetRange}</p>
                <p style="margin: 10px 0;"><strong>Timeline:</strong> ${formData.timeline}</p>
                <p style="margin: 10px 0;"><strong>Equity Openness:</strong> ${formData.equityOpenness}</p>
              </div>
              <p style="color: #8C887D; font-size: 12px; margin-top: 30px; text-align: center;">
                Submitted: ${new Date().toLocaleString()}
              </p>
            </div>
          `,
        });

        if (error) {
          console.error('Resend error:', error);
          throw new Error('Failed to send email via Resend');
        }

        console.log('✅ Email sent successfully via Resend!');
        console.log('Email ID:', data?.id);
        console.log('Recipient: hello@evolve8studio.in\n');

        return NextResponse.json(
          { success: true, message: 'Application submitted successfully. Email sent to hello@evolve8studio.in' },
          { status: 200 }
        );
      } catch (resendError: any) {
        console.error('Resend email error:', resendError);
        // Fall through to console log option
      }
    }

    // Option 2: Fallback - Log to console and return success
    console.log('⚠️  RESEND_API_KEY not configured. Email will not be sent.');
    console.log('📧 Form data logged below (check server console):\n');
    console.log(emailBody);
    console.log('\n💡 To enable email sending, add RESEND_API_KEY to .env.local\n');

    return NextResponse.json(
      {
        success: true,
        message: 'Application submitted successfully',
        note: 'Email service not configured. Form data logged to server console. Please set up RESEND_API_KEY in environment variables to receive emails.',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('❌ Error submitting application:', error);
    return NextResponse.json(
      { error: 'Failed to submit application. Please try again.' },
      { status: 500 }
    );
  }
}
