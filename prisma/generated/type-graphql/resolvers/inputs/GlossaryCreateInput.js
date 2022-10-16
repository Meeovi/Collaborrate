"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlossaryCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let GlossaryCreateInput = class GlossaryCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], GlossaryCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlossaryCreateInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], GlossaryCreateInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], GlossaryCreateInput.prototype, "published", void 0);
GlossaryCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("GlossaryCreateInput", {
        isAbstract: true
    })
], GlossaryCreateInput);
exports.GlossaryCreateInput = GlossaryCreateInput;
