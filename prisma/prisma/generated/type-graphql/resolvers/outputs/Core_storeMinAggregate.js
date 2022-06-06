"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core_storeMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Core_storeMinAggregate = class Core_storeMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Core_storeMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeMinAggregate.prototype, "key", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeMinAggregate.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeMinAggregate.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeMinAggregate.prototype, "environment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeMinAggregate.prototype, "tag", void 0);
Core_storeMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Core_storeMinAggregate", {
        isAbstract: true
    })
], Core_storeMinAggregate);
exports.Core_storeMinAggregate = Core_storeMinAggregate;
