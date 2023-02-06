"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let StatesSumAggregate = class StatesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], StatesSumAggregate.prototype, "id", void 0);
StatesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("StatesSumAggregate", {
        isAbstract: true
    })
], StatesSumAggregate);
exports.StatesSumAggregate = StatesSumAggregate;
