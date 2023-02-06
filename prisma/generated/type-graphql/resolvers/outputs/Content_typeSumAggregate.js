"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content_typeSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
let Content_typeSumAggregate = class Content_typeSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Content_typeSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], Content_typeSumAggregate.prototype, "number", void 0);
Content_typeSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Content_typeSumAggregate", {
        isAbstract: true
    })
], Content_typeSumAggregate);
exports.Content_typeSumAggregate = Content_typeSumAggregate;
