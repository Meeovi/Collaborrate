"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StocksCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let StocksCreateInput = class StocksCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StocksCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], StocksCreateInput.prototype, "enabled", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StocksCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StocksCreateInput.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StocksCreateInput.prototype, "sources", void 0);
StocksCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StocksCreateInput", {
        isAbstract: true
    })
], StocksCreateInput);
exports.StocksCreateInput = StocksCreateInput;
