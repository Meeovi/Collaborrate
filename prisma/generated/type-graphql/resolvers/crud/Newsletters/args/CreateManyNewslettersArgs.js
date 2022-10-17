"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyNewslettersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NewslettersCreateManyInput_1 = require("../../../inputs/NewslettersCreateManyInput");
let CreateManyNewslettersArgs = class CreateManyNewslettersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NewslettersCreateManyInput_1.NewslettersCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyNewslettersArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyNewslettersArgs.prototype, "skipDuplicates", void 0);
CreateManyNewslettersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyNewslettersArgs);
exports.CreateManyNewslettersArgs = CreateManyNewslettersArgs;
