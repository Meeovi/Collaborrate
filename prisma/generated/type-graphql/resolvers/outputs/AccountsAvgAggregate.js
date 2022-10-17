"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AccountsAvgAggregate = class AccountsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AccountsAvgAggregate.prototype, "id", void 0);
AccountsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AccountsAvgAggregate", {
        isAbstract: true
    })
], AccountsAvgAggregate);
exports.AccountsAvgAggregate = AccountsAvgAggregate;
