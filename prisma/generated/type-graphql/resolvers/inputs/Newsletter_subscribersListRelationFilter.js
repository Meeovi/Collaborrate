"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter_subscribersListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Newsletter_subscribersWhereInput_1 = require("../inputs/Newsletter_subscribersWhereInput");
let Newsletter_subscribersListRelationFilter = class Newsletter_subscribersListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersWhereInput_1.Newsletter_subscribersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersWhereInput_1.Newsletter_subscribersWhereInput)
], Newsletter_subscribersListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersWhereInput_1.Newsletter_subscribersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersWhereInput_1.Newsletter_subscribersWhereInput)
], Newsletter_subscribersListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Newsletter_subscribersWhereInput_1.Newsletter_subscribersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Newsletter_subscribersWhereInput_1.Newsletter_subscribersWhereInput)
], Newsletter_subscribersListRelationFilter.prototype, "none", void 0);
Newsletter_subscribersListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("Newsletter_subscribersListRelationFilter", {
        isAbstract: true
    })
], Newsletter_subscribersListRelationFilter);
exports.Newsletter_subscribersListRelationFilter = Newsletter_subscribersListRelationFilter;
