"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Credit_memosAvgAggregate = class Credit_memosAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Credit_memosAvgAggregate.prototype, "order_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Credit_memosAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Credit_memosAvgAggregate.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Credit_memosAvgAggregate.prototype, "prod_id", void 0);
Credit_memosAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Credit_memosAvgAggregate", {
        isAbstract: true
    })
], Credit_memosAvgAggregate);
exports.Credit_memosAvgAggregate = Credit_memosAvgAggregate;
