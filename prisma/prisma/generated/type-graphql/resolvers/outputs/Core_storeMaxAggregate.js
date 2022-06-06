"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core_storeMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Core_storeMaxAggregate = class Core_storeMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Core_storeMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeMaxAggregate.prototype, "key", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeMaxAggregate.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeMaxAggregate.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeMaxAggregate.prototype, "environment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeMaxAggregate.prototype, "tag", void 0);
Core_storeMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Core_storeMaxAggregate", {
        isAbstract: true
    })
], Core_storeMaxAggregate);
exports.Core_storeMaxAggregate = Core_storeMaxAggregate;
