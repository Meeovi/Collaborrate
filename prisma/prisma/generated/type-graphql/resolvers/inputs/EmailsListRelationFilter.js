"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EmailsWhereInput_1 = require("../inputs/EmailsWhereInput");
let EmailsListRelationFilter = class EmailsListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsWhereInput_1.EmailsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsWhereInput_1.EmailsWhereInput)
], EmailsListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsWhereInput_1.EmailsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsWhereInput_1.EmailsWhereInput)
], EmailsListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EmailsWhereInput_1.EmailsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EmailsWhereInput_1.EmailsWhereInput)
], EmailsListRelationFilter.prototype, "none", void 0);
EmailsListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EmailsListRelationFilter", {
        isAbstract: true
    })
], EmailsListRelationFilter);
exports.EmailsListRelationFilter = EmailsListRelationFilter;
