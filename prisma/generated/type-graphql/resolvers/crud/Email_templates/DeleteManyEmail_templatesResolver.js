"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyEmail_templatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyEmail_templatesArgs_1 = require("./args/DeleteManyEmail_templatesArgs");
const Email_templates_1 = require("../../../models/Email_templates");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyEmail_templatesResolver = class DeleteManyEmail_templatesResolver {
    async deleteManyEmail_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).email_templates.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyEmail_templatesArgs_1.DeleteManyEmail_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyEmail_templatesResolver.prototype, "deleteManyEmail_templates", null);
DeleteManyEmail_templatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Email_templates_1.Email_templates)
], DeleteManyEmail_templatesResolver);
exports.DeleteManyEmail_templatesResolver = DeleteManyEmail_templatesResolver;
