"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyEmail_templatesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyEmail_templatesArgs_1 = require("./args/FindManyEmail_templatesArgs");
const Email_templates_1 = require("../../../models/Email_templates");
const helpers_1 = require("../../../helpers");
let FindManyEmail_templatesResolver = class FindManyEmail_templatesResolver {
    async findManyEmail_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).email_templates.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Email_templates_1.Email_templates], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyEmail_templatesArgs_1.FindManyEmail_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyEmail_templatesResolver.prototype, "findManyEmail_templates", null);
FindManyEmail_templatesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Email_templates_1.Email_templates)
], FindManyEmail_templatesResolver);
exports.FindManyEmail_templatesResolver = FindManyEmail_templatesResolver;
