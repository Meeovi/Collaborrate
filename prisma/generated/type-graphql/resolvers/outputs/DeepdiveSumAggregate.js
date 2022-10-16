"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeepdiveSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let DeepdiveSumAggregate = class DeepdiveSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], DeepdiveSumAggregate.prototype, "id", void 0);
DeepdiveSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DeepdiveSumAggregate", {
        isAbstract: true
    })
], DeepdiveSumAggregate);
exports.DeepdiveSumAggregate = DeepdiveSumAggregate;
