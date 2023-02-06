"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CustomersAvgAggregate = class CustomersAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CustomersAvgAggregate.prototype, "id", void 0);
CustomersAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CustomersAvgAggregate", {
        isAbstract: true
    })
], CustomersAvgAggregate);
exports.CustomersAvgAggregate = CustomersAvgAggregate;
