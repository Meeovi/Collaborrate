"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneNewslettersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NewslettersCreateInput_1 = require("../../../inputs/NewslettersCreateInput");
let CreateOneNewslettersArgs = class CreateOneNewslettersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersCreateInput_1.NewslettersCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NewslettersCreateInput_1.NewslettersCreateInput)
], CreateOneNewslettersArgs.prototype, "data", void 0);
CreateOneNewslettersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneNewslettersArgs);
exports.CreateOneNewslettersArgs = CreateOneNewslettersArgs;
