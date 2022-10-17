"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CustomersSumAggregate = class CustomersSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CustomersSumAggregate.prototype, "id", void 0);
CustomersSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CustomersSumAggregate", {
        isAbstract: true
    })
], CustomersSumAggregate);
exports.CustomersSumAggregate = CustomersSumAggregate;
