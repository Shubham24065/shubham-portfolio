
"use client";

import { useState } from "react";

/**
 * Northstar Retail Entity Relationship Diagram
 * Based on the project's SQL Server relational schema.
 */

const entities = [
  {
    name: "Customers",
    x: 35,
    y: 60,
    fields: [
      "customer_id|PK",
      "email|UQ",
      "first_name",
      "last_name",
      "province",
    ],
  },
  {
    name: "Employees",
    x: 35,
    y: 380,
    fields: [
      "employee_id|PK",
      "first_name",
      "last_name",
      "department",
      "job_title",
    ],
  },
  {
    name: "Orders",
    x: 350,
    y: 200,
    fields: [
      "order_id|PK",
      "customer_id|FK",
      "sales_employee_id|FK, NULL",
      "order_date",
      "order_status",
    ],
  },
  {
    name: "Payments",
    x: 690,
    y: 45,
    fields: [
      "payment_id|PK",
      "order_id|FK",
      "amount",
      "payment_status",
    ],
  },
  {
    name: "Shipments",
    x: 690,
    y: 265,
    fields: [
      "shipment_id|PK",
      "order_id|FK",
      "shipped_date",
      "shipment_status",
    ],
  },
  {
    name: "OrderItems",
    x: 350,
    y: 555,
    fields: [
      "order_item_id|PK",
      "order_id|FK",
      "product_id|FK",
      "quantity",
      "discount_percent",
    ],
  },
  {
    name: "Products",
    x: 690,
    y: 565,
    fields: [
      "product_id|PK",
      "category_id|FK",
      "supplier_id|FK",
      "unit_price",
      "product_status",
    ],
  },
  {
    name: "Categories",
    x: 1010,
    y: 445,
    fields: ["category_id|PK", "category_name|UQ"],
  },
  {
    name: "Suppliers",
    x: 1010,
    y: 630,
    fields: ["supplier_id|PK", "supplier_name"],
  },
  {
    name: "Inventory",
    x: 1010,
    y: 85,
    fields: [
      "inventory_id|PK",
      "product_id|FK",
      "warehouse_location",
      "quantity_in_stock",
      "reorder_level",
    ],
  },
];

const relationships = [
  {
    name: "Customers to Orders",
    path: "M 285 154 H 310 V 256 H 350",
  },
  {
    name: "Employees to Orders",
    path: "M 285 460 H 325 V 302 H 350",
  },
  {
    name: "Orders to Payments",
    path: "M 600 256 H 645 V 118 H 690",
  },
  {
    name: "Orders to Shipments",
    path: "M 600 302 H 645 V 338 H 690",
  },
  {
    name: "Orders to OrderItems",
    path: "M 475 354 V 555",
  },
  {
    name: "Products to OrderItems",
    path: "M 690 630 H 600",
  },
  {
    name: "Categories to Products",
    path: "M 1010 515 H 965 V 622 H 940",
  },
  {
    name: "Suppliers to Products",
    path: "M 1010 676 H 940",
  },
  {
    name: "Products to Inventory",
    path: "M 815 565 V 482 H 975 V 160 H 1010",
  },
];

export default function NorthstarERD() {
  const [fitToScreen, setFitToScreen] = useState(true);

  return (
    <section
      className="northstar-erd"
      aria-label="Northstar Retail entity relationship diagram"
    >
      {/* Diagram heading */}
      <div className="northstar-erd-heading">
        <span>ENTITY RELATIONSHIP DIAGRAM</span>
        <small>10 TABLES · 9 FOREIGN KEYS · SQL SERVER</small>
      </div>

      {/* Viewing controls */}
      <div className="northstar-erd-toolbar">
        <span>DATABASE STRUCTURE / RELATIONSHIPS</span>

        
      </div>

      {/* Diagram viewport */}
      <div
        className={`northstar-erd-scroll ${
          fitToScreen ? "northstar-erd-fit" : "northstar-erd-full"
        }`}
        tabIndex={0}
        aria-label="Northstar Retail database diagram viewport"
      >
        <svg
          viewBox="0 0 1290 805"
          width="1290"
          height="805"
          role="img"
          aria-labelledby="northstar-erd-title northstar-erd-desc"
        >
          <title id="northstar-erd-title">
            Northstar Retail database ERD
          </title>

          <desc id="northstar-erd-desc">
            Ten relational tables connected through nine foreign
            key relationships. Each table displays its primary key,
            foreign keys, and selected database columns.
          </desc>

          <defs>
            <marker
              id="northstar-many"
              markerWidth="12"
              markerHeight="12"
              refX="11"
              refY="6"
              orient="auto"
              markerUnits="userSpaceOnUse"
            >
              <path
                d="M2 2 L11 6 L2 10"
                fill="none"
                stroke="#42b6ff"
                strokeWidth="1.4"
              />
            </marker>
          </defs>

          {/* Foreign-key relationships */}
          <g
            className="northstar-erd-edges"
            fill="none"
            stroke="#42b6ff"
            strokeWidth="1.5"
            strokeLinejoin="round"
            opacity="0.85"
          >
            {relationships.map((relationship) => (
              <path
                key={relationship.name}
                d={relationship.path}
                aria-label={relationship.name}
                markerEnd="url(#northstar-many)"
              />
            ))}
          </g>

          {/* Database entities */}
          {entities.map((entity) => (
            <g
              key={entity.name}
              transform={`translate(${entity.x} ${entity.y})`}
            >
              {/* Table body */}
              <rect
                width="250"
                height="154"
                rx="9"
                fill="#071e30"
                stroke="#2677ad"
                strokeWidth="1.3"
              />

              {/* Table heading background */}
              <path
                d="M0 9 Q0 0 9 0 H241 Q250 0 250 9 V37 H0 Z"
                fill="#103751"
              />

              {/* Table name */}
              <text
                x="16"
                y="25"
                fill="#eff8ff"
                fontSize="15"
                fontWeight="700"
              >
                {entity.name}
              </text>

              {/* Database columns */}
              {entity.fields.map((field, index) => {
                const [name, tag] = field.split("|");

                const isPrimaryKey = tag?.includes("PK");
                const isForeignKey = tag?.includes("FK");

                return (
                  <g key={field}>
                    <text
                      x="16"
                      y={56 + index * 19}
                      fill={
                        isPrimaryKey ? "#f3f9ff" : "#a8c9e1"
                      }
                      fontSize="12.5"
                      fontFamily="ui-monospace, SFMono-Regular, Consolas, monospace"
                    >
                      {name}
                    </text>

                    {tag && (
                      <text
                        x="232"
                        y={56 + index * 19}
                        textAnchor="end"
                        fill={
                          isPrimaryKey
                            ? "#41d8b2"
                            : isForeignKey
                            ? "#55baff"
                            : "#9caec4"
                        }
                        fontSize="10"
                        fontWeight="700"
                      >
                        {tag}
                      </text>
                    )}
                  </g>
                );
              })}
            </g>
          ))}
        </svg>
      </div>

      {/* Diagram legend */}
      <div className="northstar-erd-footer">
        <span>
          <b>PK</b> Primary key
        </span>

        <span>
          <b>FK</b> Foreign key
        </span>

        <span>
          <b>UQ</b> Unique
        </span>

        <span>
          <b>◇</b> Relationship connections
        </span>

        
      </div>
    </section>
  );
}
