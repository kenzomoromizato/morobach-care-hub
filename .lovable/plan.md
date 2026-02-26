

## Plan: Replace MessageCircle with WhatsApp Logo SVG

The current WhatsApp button in `DifferentialSection.tsx` uses `MessageCircle` from lucide-react, which is a generic chat bubble. Lucide does not include a WhatsApp brand icon.

### Implementation

**File: `src/components/landing/DifferentialSection.tsx`**

1. Remove the `MessageCircle` import from lucide-react
2. Replace the `<MessageCircle>` component on line 66 with an inline SVG of the official WhatsApp logo (the phone-in-speech-bubble icon), keeping the same `w-5 h-5` sizing and `currentColor` fill to match the button style

This is a single-line icon swap with no structural changes.

