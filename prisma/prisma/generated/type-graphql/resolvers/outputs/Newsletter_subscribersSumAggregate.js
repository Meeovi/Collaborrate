"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter_subscribersSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Newsletter_subscribersSumAggregate = class Newsletter_subscribersSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Newsletter_subscribersSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Newsletter_subscribersSumAggregate.prototype, "cust_id", void 0);
Newsletter_subscribersSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Newsletter_subscribersSumAggregate", {
        isAbstract: true
    })
], Newsletter_subscribersSumAggregate);
exports.Newsletter_subscribersSumAggregate = Newsletter_subscribersSumAggregate;
