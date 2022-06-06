"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core_storeCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Core_storeCreateInput = class Core_storeCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeCreateInput.prototype, "key", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeCreateInput.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeCreateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeCreateInput.prototype, "environment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Core_storeCreateInput.prototype, "tag", void 0);
Core_storeCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Core_storeCreateInput", {
        isAbstract: true
    })
], Core_storeCreateInput);
exports.Core_storeCreateInput = Core_storeCreateInput;
