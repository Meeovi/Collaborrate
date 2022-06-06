"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Special_discountsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
let Special_discountsSumAggregate = class Special_discountsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Special_discountsSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], Special_discountsSumAggregate.prototype, "discount", void 0);
Special_discountsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Special_discountsSumAggregate", {
        isAbstract: true
    })
], Special_discountsSumAggregate);
exports.Special_discountsSumAggregate = Special_discountsSumAggregate;
