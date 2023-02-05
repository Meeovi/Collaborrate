"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZonesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let ZonesSumAggregate = class ZonesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ZonesSumAggregate.prototype, "id", void 0);
ZonesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ZonesSumAggregate", {
        isAbstract: true
    })
], ZonesSumAggregate);
exports.ZonesSumAggregate = ZonesSumAggregate;
