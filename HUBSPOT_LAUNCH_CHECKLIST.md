# HubSpot Reactivation Launch Checklist

## Smart list: Past Funded — Capital Upgrade Review

Required filters:

- Previously funded client = true
- Last funded date is more than 12 months ago
- Email is known
- Marketing email unsubscribed is false
- Do not contact is false
- Paid / closed-won / prior client status is true

Suppress:

- Open disputes
- Active complaints
- Unresolved refund requests
- Recent negative interactions
- No SMS consent for SMS sequences

## Initial batch

- Start with 250–500 contacts.
- Create 25 manual phone tasks for the highest-value prior clients.
- Do not blast the full database until checkout and intake flow are verified.

## Deal automation

On purchase:

- Create deal: `Capital Upgrade Review - [Company Name]`
- Pipeline stage: Purchased / Intake Pending
- Create task: Review intake and schedule strategy call
- Set property: `capital_upgrade_purchase_status = purchased`
- Trigger confirmation email

## Recommended properties

- `capital_upgrade_purchase_status`
- `capital_upgrade_review_score`
- `capital_upgrade_path`
- `bridge_qualified`
- `previously_funded_client`
- `sms_consent`
- `do_not_contact`
