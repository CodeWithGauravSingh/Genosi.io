
import React, { useState } from 'react';
import './PricingPage.css'; 

const PricingPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
  };

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      cost: '$4/month/user',
      graphsLimit: 'Up to 10 graphs',
      queriesLimit: 'Up to 500 chatbot queries',
    },
    {
      id: 'pro',
      name: 'Pro Plan',
      cost: '$8/month/user',
      graphsLimit: 'Up to 50 graphs',
      queriesLimit: 'Up to 1000 chatbot queries',
      support: 'Email + live chat support',
    },
    {
      id: 'enterprise',
      name: 'Enterprise Plan',
      cost: 'Contact for price',
      graphsLimit: 'Unlimited graphs',
      features: 'Ability to upload custom PDFs',
      support: '24/7 phone + email support',
    },
  ];

  return (
    <div className="pricing-container">
      <h2 className="pricing-heading">Pricing Page</h2>

      <div className="pricing-plans-grid">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`pricing-plan-card ${selectedPlan === plan.id ? 'selected-plan' : ''}`}
            onClick={() => handlePlanSelect(plan.id)}
          >
            <h3 className="plan-name">{plan.name}</h3>
            <p className="plan-cost">{plan.cost}</p>
            <p>{plan.graphsLimit}</p>
            {plan.queriesLimit && <p>{plan.queriesLimit}</p>}
            {plan.support && <p>{plan.support}</p>}
            {plan.features && <p>{plan.features}</p>}

            <div className="select-plan-button">
              <input
                type="radio"
                id={`plan-${plan.id}`}
                name="pricingPlan"
                value={plan.id}
                checked={selectedPlan === plan.id}
                onChange={() => handlePlanSelect(plan.id)}
              />
              <label htmlFor={`plan-${plan.id}`}>Select Plan</label>
            </div>
          </div>
        ))}
      </div>
      {Array.from({ length: 50 }).map((_, index) => (
        <div
          key={index}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `twinkle ${Math.random() * 2 + 1}s infinite alternate`,
          }}
        ></div>
      ))}

      {selectedPlan && (
        <div className="selected-plan-details">
          <h3 className="selected-plan-heading">Selected Plan Details</h3>
          {pricingPlans.find((plan) => plan.id === selectedPlan)?.cost && (
            <p>Cost: {pricingPlans.find((plan) => plan.id === selectedPlan)?.cost}</p>
          )}
          {pricingPlans.find((plan) => plan.id === selectedPlan)?.graphsLimit && (
            <p>Graphs Limit: {pricingPlans.find((plan) => plan.id === selectedPlan)?.graphsLimit}</p>
          )}
          {pricingPlans.find((plan) => plan.id === selectedPlan)?.queriesLimit && (
            <p>
              Queries Limit: {pricingPlans.find((plan) => plan.id === selectedPlan)?.queriesLimit}
            </p>
          )}
          {pricingPlans.find((plan) => plan.id === selectedPlan)?.support && (
            <p>Support: {pricingPlans.find((plan) => plan.id === selectedPlan)?.support}</p>
          )}
          {pricingPlans.find((plan) => plan.id === selectedPlan)?.features && (
            <p>Features: {pricingPlans.find((plan) => plan.id === selectedPlan)?.features}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PricingPage;
