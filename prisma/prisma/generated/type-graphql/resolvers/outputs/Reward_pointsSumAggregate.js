"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reward_pointsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
let Reward_pointsSumAggregate = class Reward_pointsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Reward_pointsSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], Reward_pointsSumAggregate.prototype, "discount", void 0);
Reward_pointsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Reward_pointsSumAggregate", {
        isAbstract: true
    })
], Reward_pointsSumAggregate);
exports.Reward_pointsSumAggregate = Reward_pointsSumAggregate;
