"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEmail_templatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteEmail_templatesArgs_1 = require("./args/DeleteEmail_templatesArgs");
const Email_templates_1 = require("../../../models/Email_templates");
const helpers_1 = require("../../../helpers");
let DeleteEmail_templatesResolver = class DeleteEmail_templatesResolver {
    async deleteEmail_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).email_templates.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Email_templates_1.Email_templates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteEmail_templatesArgs_1.DeleteEmail_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteEmail_templatesResolver.prototype, "deleteEmail_templates", null);
DeleteEmail_templatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Email_templates_1.Email_templates)
], DeleteEmail_templatesResolver);
exports.DeleteEmail_templatesResolver = DeleteEmail_templatesResolver;
