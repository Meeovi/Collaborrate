"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core_storeSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Core_storeSumAggregate = class Core_storeSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Core_storeSumAggregate.prototype, "id", void 0);
Core_storeSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Core_storeSumAggregate", {
        isAbstract: true
    })
], Core_storeSumAggregate);
exports.Core_storeSumAggregate = Core_storeSumAggregate;
