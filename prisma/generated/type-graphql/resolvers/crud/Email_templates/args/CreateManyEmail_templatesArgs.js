"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyEmail_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Email_templatesCreateManyInput_1 = require("../../../inputs/Email_templatesCreateManyInput");
let CreateManyEmail_templatesArgs = class CreateManyEmail_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Email_templatesCreateManyInput_1.Email_templatesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyEmail_templatesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyEmail_templatesArgs.prototype, "skipDuplicates", void 0);
CreateManyEmail_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyEmail_templatesArgs);
exports.CreateManyEmail_templatesArgs = CreateManyEmail_templatesArgs;
