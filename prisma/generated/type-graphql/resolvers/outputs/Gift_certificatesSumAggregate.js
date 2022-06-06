"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gift_certificatesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Gift_certificatesSumAggregate = class Gift_certificatesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Gift_certificatesSumAggregate.prototype, "id", void 0);
Gift_certificatesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Gift_certificatesSumAggregate", {
        isAbstract: true
    })
], Gift_certificatesSumAggregate);
exports.Gift_certificatesSumAggregate = Gift_certificatesSumAggregate;
