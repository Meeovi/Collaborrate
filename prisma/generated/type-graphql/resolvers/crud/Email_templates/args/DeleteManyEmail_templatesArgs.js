"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyEmail_templatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Email_templatesWhereInput_1 = require("../../../inputs/Email_templatesWhereInput");
let DeleteManyEmail_templatesArgs = class DeleteManyEmail_templatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Email_templatesWhereInput_1.Email_templatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Email_templatesWhereInput_1.Email_templatesWhereInput)
], DeleteManyEmail_templatesArgs.prototype, "where", void 0);
DeleteManyEmail_templatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyEmail_templatesArgs);
exports.DeleteManyEmail_templatesArgs = DeleteManyEmail_templatesArgs;
