"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VendorsSumAggregate = class VendorsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VendorsSumAggregate.prototype, "id", void 0);
VendorsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VendorsSumAggregate", {
        isAbstract: true
    })
], VendorsSumAggregate);
exports.VendorsSumAggregate = VendorsSumAggregate;
